//args is an array of elements
function getNewsandNotices(args, dept){

  $.ajax({
    url: "https://api.latah.id.us/web/getnewsnotice?dept=" + dept,
    type: "GET",
    async: true,
    dataType: 'json',
    success: function(data){
      $.each(data, function(index){
        for(var i=0; i < args.length; i++){
          if(args[i].indexOf(data[index].ArticleType) !== -1){
            var link=null;
            //is it a pdf?
            if(data[index].FileAttached != null){
               $('#' + args[i]).append(
                 $('<a class="list-group-item text-center list-link" ' + 'value=' + index +
                 ' href="' + 'javascript:void(0)' + '"' + '>' +  data[index].ArticleTitle + '</a>')
               )
               $('.list-group-item').on('click', function(evt){
                                var index = $(this).attr('value');
                                DownloadNewsNotice(data[index].FileAttached, data[index].ArticleType);
                                evt.stopImmediatePropagation();
                            })              

                function DownloadNewsNotice(filename, articleType){
                var url = 'https://api.latah.id.us/web/DownloadNewsNotice?fileName=' + filename + '&type=' + articleType;

                 $.ajax({
                   url: '',
                   success: function(){
                     window.open(url);
                   },
                   async: false
                 });
               }
            }
            //or url
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

      //this code adds "None at this time" when the list-group has no items
      for(var i = 0; i < args.length; i++){
        var n1 = $('#' + args[i] + ' .list-group-item').length;
          if(n1 == 0){
          $('#' + args[i]).append(
            $('<a class="list-group-item text-center" ' + '>' + 'None at this time' + '</a>')
          )
        }
      }          

    }//success
  });//ajax
}

