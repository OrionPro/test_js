window.onload = function() {
    // находим все картинки 
    var block_img = document.querySelectorAll('.block_img img');

    // в переменной храним все блоки для, куда будем перемещать случайные картинки

    var block_image_show = document.querySelectorAll('.block_image_show_1, .block_image_show_2,  .block_image_show_3, .block_image_show_4, .block_image_show_5,  .block_image_show_6, .block_image_show_7, .block_image_show_8,  .block_image_show_9');

    // Создаём настоящий массив из картинок

    block_img = [].slice.call(block_img);

    // Находим все блоки, в которые будем класть все случайные картинки

    for (var i = 0; i < block_image_show.length; i++) {

        var rand = Math.floor(Math.random() * block_img.length); // получаем случайную картинку

        var arrImg = block_img.splice(rand, 1)[0]; // берём из массива картинку

        if (arrImg) block_image_show[i].appendChild(arrImg); // берём случайную картинку и помещаем картинку в блоки block_image_show$
    }

    // Работа с fabric и Canvas

    var canvas = new fabric.Canvas('c');

    //Находим картинку в нужном блоке

    var imgElement = document.querySelector('.block_image_show_1 .my-image');

    //  //подготавливаем картинку для заливке на Холст (можно задавать значения, которые регулируют положение картинки при заливки, например в данном случае я буду использовать смещение всех картинок влево на их ширину )

    var imgInstance = new fabric.Image(imgElement, {

    });
    var canvas2 = new fabric.Canvas('c');
    var imgElement2 = document.querySelector('.block_image_show_2 .my-image');
    var imgInstance2 = new fabric.Image(imgElement2, {

        left: 100
    });
    var canvas3 = new fabric.Canvas('c');
    var imgElement3 = document.querySelector('.block_image_show_3 .my-image');
    var imgInstance3 = new fabric.Image(imgElement3, {
        left: 200

    });
    var canvas4 = new fabric.Canvas('c');
    var imgElement4 = document.querySelector('.block_image_show_4 .my-image');
    var imgInstance4 = new fabric.Image(imgElement4, {
        left: -100
    });
    var canvas5 = new fabric.Canvas('c');
    var imgElement5 = document.querySelector('.block_image_show_5 .my-image');
    var imgInstance5 = new fabric.Image(imgElement5, {

        left: -200
    });
    var canvas6 = new fabric.Canvas('c');
    var imgElement6 = document.querySelector('.ace');
    var imgInstance6 = new fabric.Image(imgElement6, {
        left: -300

    });
    var canvas7 = new fabric.Canvas('c');
    var imgElement7 = document.querySelector('.ten ');
    var imgInstance7 = new fabric.Image(imgElement7, {
        left: -400
    });
    var canvas8 = new fabric.Canvas('c');
    var imgElement8 = document.querySelector('.ten ');
    var imgInstance8 = new fabric.Image(imgElement8, {

        left: -500
    });
    var canvas9 = new fabric.Canvas('c');
    var imgElement9 = document.querySelector('.block_image_show_9 .my-image');
    var imgInstance9 = new fabric.Image(imgElement9, {
        left: -600

    });
    var canvas10 = new fabric.Canvas('c');
    var imgElement10 = document.querySelector('.block_image_show_9 .my-image');
    var imgInstance10 = new fabric.Image(imgElement10, {
        left: -700

    });

    // Создаём группу из подготовленных картинок 

    var imgGroup = [imgInstance, imgInstance2, imgInstance3, imgInstance4, imgInstance5, imgInstance6, imgInstance7, imgInstance8];

    // Добавляем их на холст

    canvas.add(new fabric.Group([imgInstance, imgInstance2, imgInstance3, imgInstance4, imgInstance5, imgInstance6, imgInstance7, imgInstance8], {

    }));

    // обраточик кнопки

    var btn = document.querySelector('.btn');

    btn.addEventListener('click', function() {
        canvas.remove(new fabric.Group([imgInstance, imgInstance2, imgInstance3, imgInstance4, imgInstance5, imgInstance6, imgInstance7, imgInstance8], {

        }));
        for (var v = 0; v < imgGroup.length; v++) {
            imgGroup[v].animate('left', '+=500', {
                onChange: canvas.renderAll.bind(canvas),
                duration: 5000,
                easing: fabric.util.ease.easeOutSine
            });
            if (imgGroup[v].left > 500) {
                canvas.add(new fabric.Group([imgInstance, imgInstance2, imgInstance3, imgInstance4, imgInstance5, imgInstance6, imgInstance7, imgInstance8], {
                    top: 0,
                    left: 0
                }));

            }
            if (imgGroup[v].left > 1000) {
                canvas.add(new fabric.Group([imgInstance, imgInstance2, imgInstance3, imgInstance4, imgInstance5, imgInstance6, imgInstance7, imgInstance8], {
                    top: 0,
                    left: 0
                }));
            }

        }





    });




};
