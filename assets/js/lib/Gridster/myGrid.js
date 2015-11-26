      var gridster = $(".gridster > ul").gridster({
          widget_margins: [5, 5],
          widget_base_dimensions: [100, 55]
      }).data('gridster');

      console.log(gridster);

      var widgets = [
          ['<li id=1 ><button onclick="deleteWindow()"> x </button>1</li>', 1, 2],
          ['<li>1</li>', 3, 2],
          ['<li>2</li>', 3, 2],
          ['<li>3</li>', 2, 1],
          ['<li>4</li>', 4, 1],
          ['<li>5</li>', 1, 2],
          ['<li>6</li>', 2, 1],
          ['<li>7</li>', 3, 2],
          ['<li>8</li>', 1, 1],
          ['<li>9</li>', 2, 2],
          ['<li>10</li>', 1, 3]
      ];
      
      $.each(widgets, function(i, widget){
          gridster.add_widget.apply(gridster, widget)
      });

      function addWindow() {
        var fenetre = ['<li><div class=test>test</div></li>', 2, 2];
        gridster.add_widget.apply(gridster,fenetre);
      }

      function deleteWindow(){
        var fenetre = document.getElementById(1);
        console.log(fenetre);
        gridster.remove_widget.apply(fenetre);
      }
