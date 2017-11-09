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
                        this.iframe = `<iframe src="./templates/Widget_1.html" width="` + this.width + `" height="` + this.height+ `" align="left"></iframe>`;
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
                        this.iframe = `<iframe src="./templates/Widget_2.html" width="` + this.width + `" height="` + this.height+ `" align="left"></iframe>`;
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