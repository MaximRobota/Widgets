(function () {
    this.Widgets = {
        require: function (widgetName) {
            switch(widgetName){
                case 'Widget_1':
                    return this.Widget_1 = function Widget_1 (object) {
                        this.byId = object.byId;
                        this.width = object.width;
                        this.height = object.height;
                        this.iframe = `<iframe src="./Widgets/Widgets_1/Widget_1.html" width="` + this.width + `" height="` + this.height+ `" align="left"></iframe>`;
                    };

                    break;
                case 'Widget_2':
                    return this.Widget_2 = function Widget_1 (object) {
                        this.byId = object.byId;
                        this.width = object.width;
                        this.height = object.height;
                        this.iframe = `<iframe src="./Widgets/Widgets_2/Widget_2.html" width="` + this.width + `" height="` + this.height+ `" align="left"></iframe>`;
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