var render = function (theme, data, meta, require) {

    if(data.error.length == 0 ){
        theme('index', {
            title: [
                {
                    partial:'index_title',
                    context:{
                        page_title:'Apache Stratos Home'
                    }
                }
            ],
            header:[
                {
                    partial: ''
                }
            ],
            body: [

                {
                    partial: '',
                    context:{

                    }
                }
            ]
        });

    }else{


    }
};