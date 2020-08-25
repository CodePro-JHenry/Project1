var url = 'https://jsonplaceholder.typicode.com/posts'

$.get(url, function (response) {
    console.log(response)
    var rowEl = $('<div>')
    rowEl.addClass('row')
    $(".container").append(rowEl)

    for (var i = 0; i < response.length; i++) {
        // var rowEl = $('<div>')
        var colEl = $('<div>')
        colEl.addClass('one-half column')
        colEl.css({ 'padding': '2%', 'marginLeft': '0%' })
        colEl.text(response[i].body)
        // if (i % 3 === 0) {
        //     rowEl.addClass('row')
        // }
        rowEl.append(colEl)
    }
})