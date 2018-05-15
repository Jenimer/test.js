$(document).ready(function(){
    
    $('#reset').hide()
    
    
    $('#rock').on('click', function(){ 
        $('#buttons')
        .html ('<h1>You have chosen rock. Since the computer hates you, you lose!</h1>')
        .css ({

            'textAlign': 'center',
            'minWidth': '100%',
            'backgroundColor': 'gray',
        })

    })
    $('#paper').on('click', function(){
        $('#buttons')
        .html ('<h1>You have chosen paper. Since the computer hates you, you lose!</h1>')
        .css ({

            'textAlign': 'center',
            'minWidth': '100%',
            'backgroundColor': 'gray',
        })
    })
    $('#scissors').on('click', function(){
        $('#buttons')
        .html ('<h1>You have chosen scissors. Since the computer hates you, you lose!</h1>')
        .css ({

            'textAlign': 'center',
            'minWidth': '100%',
            'backgroundColor': 'gray',
        })
    })

})