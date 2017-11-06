// window.onload = function(){
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
                        this.background = object.background;
                        this.template = `
                            <div id="` + this.id + `" style = "width:` + this.width + `px; background:` + this.background + `">
                                <h2>Widget_1 DEMO</h2>
                                <div id="authorContainer">
                                    <div>
                                        <h3 data-dojo-attach-point="nameNode">Title: ` + this.title + `</h3>
                                        <p data-dojo-attach-point="bioNode">Name</p>
                                        <button onclick="countRabbits();">Click</button>
                                    </div>
                                </div>
                            </div>
                        `;
                        this.count = 0;
                        this.countRabbits = countRabbits = () => {
                            this.title = this.count++;
                            this.template = `
                            <div id="` + this.id + `" style = "width:` + this.width + `px; background:` + this.background + `">
                                <h2>Widget_1 DEMO</h2>
                                <div id="authorContainer">
                                    <div>
                                        <h3 data-dojo-attach-point="nameNode">Title: ` + this.title + `</h3>
                                        <p data-dojo-attach-point="bioNode">Name</p>
                                        <button onclick="countRabbits();">Click</button>
                                    </div>
                                </div>
                            </div>
                        `;
                            max.reload(this);
                        }
                    };

                    break;
                case 'Widget_2':
                    return this.Widget_2 = function Widget_1 (object) {
                        this.id = object.id;
                        this.title = object.title;
                        this.byId = object.byId;
                        this.width = object.width;
                        this.background = object.background;
                        this.template = `
                            <div id="` + this.id + `" style = "width:` + this.width + `px; background:` + this.background + `">
                                <h2>Widget_2 DEMO</h2>
                                <div id="authorContainer">
                                    <div>
                                        <h3 data-dojo-attach-point="nameNode">Title: ` + this.title + `</h3>
                                        <p data-dojo-attach-point="bioNode">Name</p>
                                        <button onclick="countRabbits2();">Click</button>
                                    </div>
                                </div>
                            </div>
                        `;
                        this.count = 0;
                        this.countRabbits2 = countRabbits2 = () => {
                            this.title = this.count++;
                            this.template = `
                            <div id="` + this.id + `" style = "width:` + this.width + `px; background:` + this.background + `">
                                <h2>Widget_2 DEMO</h2>
                                <div id="authorContainer">
                                    <div>
                                        <h3 data-dojo-attach-point="nameNode">Title: ` + this.title + `</h3>
                                        <p data-dojo-attach-point="bioNode">Name</p>
                                        <button onclick="countRabbits2();">Click</button>
                                    </div>
                                </div>
                            </div>
                        `;
                            max.reload(this);
                        }
                    };
                    break;
                default:
                    break;
            }

        },
        reload: function (reload) {
            document.getElementById(reload.byId).firstChild.remove();
            var e = document.createElement('div');
            e.innerHTML = reload.template;
            document.getElementById(reload.byId).appendChild(e);
        },
        ready: function (makeGauge) {
            var e = document.createElement('div');
            e.innerHTML = makeGauge.template;
            document.getElementById(makeGauge.byId).appendChild(e);
        }
    }
})();