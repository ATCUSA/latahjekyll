function getNewsandNotices(id, dept, type){
  $(document).ready(function(){
    $.ajax({
      url: "https://www.latah.id.us/api/getnewsnotice?dept=" + dept,
      type: "GET",
      async: true, // set to false so order of operations is correct
      dataType: 'json',
      success: function(data){
        $('#' + id).empty();
        $.each(data, function(){

          if(type == this.ArticleType){
            var link=null;
            if(this.PdfPath != null){
              $('#' + id).append(
                $('<a class="list-group-item text-center list-link" ' +
                  ' href="#">' +  this.ArticleTitle + '</a>')
              )
              $('.list-group-item').on('click', function() {
                var index = $(this).index();

                     if(data[index].PdfPath != null){

                       var url = 'https://www.latah.id.us/api/downloadFile?fileName=' + data[index].PdfPath;
                       //var link = document.createElement('a');
                       //link.href = url;
                       //link.download = data[index].FileAttached;
                       //link.click();
                       setTimeout(() => window.location = url, 1000);
                   }
              })
            }
            else if(this.Url != null){
              $('#' + id).append(
                $('<a class="list-group-item text-center list-link" ' +
                'href="' + this.Url + '">' +
                this.ArticleTitle +
                '</a>')
                ) //append

            }
            // $('#' + id).append(
            //   $('<a class="list-group-item text-center list-link" ' +
            //   'href="' + link + '">' +
            //   this.ArticleTitle +
            //   '</a>')

          }//id equals type

        });//each
      }//success
    });//ajax
  });//ready
}
