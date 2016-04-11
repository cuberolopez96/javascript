/**
 * Created by Cubero on 07/03/2016.
 */
(function(){
     var READY_STATE_COMPLETE = 4;
     var contenidos = $('#contenidos')
     var aestados = ['not found','OK','redirecionando','not found','continue'];
     var url;
    $(document).ready(function(){
       $('#contenidos').val(location.href);

        $('#mostrar').click(function(){
            url = $('#textoi').val;
            $.ajax({
                url: url,
                type: 'GET',
                async: true,
                data: null,
                success:true,
                error: "error not found"
            })
            $.get('index.html',function(data){
                $('#contenidos').val(data);
                $('#estados').val(aestados[data.]);
            });


        })
    });
})()