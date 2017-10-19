function getNewsandNotices(id, dept, type){
  //$(document).ready(function(){
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
              $('.list-group-item').click({param1: this.PdfPath}, downloadFile);
                function downloadFile(event){
                  if(event.data.param1 != null){
                    var url = 'https://www.latah.id.us/api/downloadFile?fileName=' + event.data.param1;
                    setTimeout(() => window.location = url, 1000);
                }
              }               
            }
            else if(this.Url != null){
              $('#' + id).append(
                $('<a class="list-group-item text-center list-link" ' +
                'href="' + this.Url + '">' +
                this.ArticleTitle +
                '</a>')
                ) //append

            }
          }//id equals type
        });//each
      }//success
    });//ajax
  //});//ready
}
