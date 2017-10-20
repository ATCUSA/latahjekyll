//args is an array of elements
function getNewsandNotices(args, dept){

  $.ajax({
    url: "https://www.latah.id.us/api/getnewsnotice?dept=" + dept,
    type: "GET",
    async: true,
    dataType: 'json',
    success: function(data){      
      $.each(data, function(index){
        for(var i=0; i < args.length; i++){
          if(args[i].indexOf(data[index].ArticleType) !== -1){
            var link=null;
            if(data[index].PdfPath != null){
              $('#' + args[i]).append(
                $('<a class="list-group-item text-center list-link" ' +
                ' href="#">' +  data[index].ArticleTitle + '</a>')
              )
              $('#' + args[i]).click({param1: data[index].PdfPath}, downloadFile);

              function downloadFile(event){
                if(event.data.param1 != null){
                  var url = 'https://www.latah.id.us/api/downloadFile?fileName=' + event.data.param1;
                  setTimeout(() => window.open(url, '_blank'), 500);
                }
              }
            }
            else if(this.Url != null){
              $('#' + args[i]).append(
                $('<a class="list-group-item text-center list-link" ' +
                'href="' + data[index].Url + '">' +
                data[index].ArticleTitle +
                '</a>')
              ) //append
            }
          }//check Article type vs ele type
        }//for loop
      });//each
    }//success
  });//ajax
}
