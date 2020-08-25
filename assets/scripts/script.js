var url = 'https://jsonplaceholder.typicode.com/posts'

$.get(url, function (response) {
    console.log(response)
    var rowEl = $('<div>')
    $("#main").append(rowEl)

    for (var i = 0; i < response.length; i++) {
        var colEl = $('<div>')
        colEl.addClass('three column')
        colEl.text(response.body)

        rowEl.append(colEl)
    }
})
