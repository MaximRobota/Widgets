(function () {
    this.max = {
        require: function (widgetName) {
            switch(widgetName){
                case 'Widget_1':
                    return this.Widget_1 = function Widget_1 (object) {
                        this.id = object.id;
                        this.title = object.title;
                        this.byId = object.byId;
                        this.width = object.width;
                        this.height = object.height;
                        this.background = object.background;
                        this.iframe = `<iframe src="http://leg-dev.artofushos.com/stages" width="` + this.width + `" height="` + this.height+ `" align="left"></iframe>`;
                    };

                    break;
                case 'Widget_2':
                    return this.Widget_2 = function Widget_1 (object) {
                        this.id = object.id;
                        this.title = object.title;
                        this.byId = object.byId;
                        this.width = object.width;
                        this.height = object.height;
                        this.background = object.background;
                        this.iframe = `<iframe src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p720x720/15037258_522283707977855_271500074295360243_n.jpg?oh=fe12a09601442f9e971d131769261616&oe=5A6BB5DF" width="` + this.width + `" height="` + this.height+ `" align="left"></iframe>`;
                    };
                    break;
                default:
                    break;
            }

        },
        ready: function (makeGauge) {
            var html = document.createElement('div');
            html.innerHTML = makeGauge.iframe ;
            document.getElementById(makeGauge.byId).appendChild(html);
        }
    }
})();