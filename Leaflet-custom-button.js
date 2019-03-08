L.Control.Custom = L.Control.Layers.extend({
          onAdd: function () {
            this._initLayout();
            this._addButton();
            this._update();
            return this._container;
          },
          _addButton: function () {
            var elements = this._container.getElementsByClassName('leaflet-control-layers-list');
            var button = L.DomUtil.create('button', 'my-button-class', elements[0]);
            button.textContent = 'Close control';
            L.DomEvent.on(button, 'click', function(e){
              L.DomEvent.stop(e);
              this._collapse();
            }, this);
          }
        });
