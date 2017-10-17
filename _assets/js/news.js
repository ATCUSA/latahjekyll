function getNewsandNotices(id, dept, type){
  $(document).ready(function(){
    $.ajax({
      url: "https://www.latah.id.us/api/getnewsnotice?dept=" + dept,
      type: "GET",
      async: true, // set to false so order of operations is correct
      success: function(data){

        $.each(data, function(){

          if(type == this.ArticleType){
            var link=null;
            if(this.PdfPath != null){
              link = this.PdfPath;
            }
            else if(this.Url != null){
              link = this.Url;
            }
            $('#' + id).append(
              $('<a class="list-group-item text-center list-link" ' +
              'href="' + link + '">' +
              this.ArticleTitle +
              '</a>')
            ) //append
          }//id equals type
        });//each
      }//success
    });//ajax
  });//ready
}
