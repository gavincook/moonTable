(function () {
    $(function () {
        var data = [
            {"id": 1, "name": "Gavin Cook", "code": "000001"},
            {"id": 2, "name": "Jeremy", "code": "000002"},
            {"id": 3, "name": "John Smith", "code": "000003"},
            {"id": 4, "name": "Tim Cook", "code": "000004"}
        ];
        $("#demoTable").table({
            title: "测试表格",
            columns: [
                {
                    name: "id",width: 200, display: 'id(限宽200px)', sort: true
                },
                {name: "name", display: "名称(居中)", align: "center", sort: true, sortName: "name"},
                {name: "code"},
                {
                    display: '附加列测试(居右)', align: "right", render: function (columnData) {
                    return "测试内容 for " + columnData.name;
                }
                }
            ],
            data: {items: data}
        });
    });
})();