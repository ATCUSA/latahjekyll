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
                 'href="' + 'javascript:void(0)' + '"' + 'target="_blank">' +  data[index].ArticleTitle + '</a>')
               )

              $('#' + args[i]).click({param1: data[index].PdfPath}, downloadFile);

               function downloadFile(event){
                 var url = 'https://www.latah.id.us/api/downloadFile?fileName=' + event.data.param1
                 $.ajax({
                   url: '',
                   success: function(){
                     window.open(url);
                   },
                   async: false
                 });
               }
            }
            else if(this.Url != null){
              $('#' + args[i]).append(
                $('<a class="list-group-item text-center list-link" ' +
                'href="' + data[index].Url + '" target="_blank"' + '>' +
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
