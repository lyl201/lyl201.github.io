<template>
    <div class="detail-container">
        <Tabs value="name1" @on-click="changeTab">
            <TabPane label="新增" name="add">
                <Input
                    style="margin-bottom: 30px"
                    v-model="data.title"
                    type="textarea"
                    :autosize="true"
                    placeholder="请输入文章标题"/>

                <div style="width: calc(100% - 20px);height: 500px">
                    <mavon-editor
                        style="height:100%; margin-left: 10px"
                        :ishljs="true"
                        @imgAdd="imgAdd"
                        @imgDel="imgDel"
                        v-model="data.content"></mavon-editor>
                </div>

                <div class="select">
                    <Input
                        style="margin-bottom: 30px"
                        v-model="data.summary"
                        type="textarea"
                        :autosize="true"
                        placeholder="请输入文章摘要"/>
                    <Input
                        style="margin-bottom: 30px"
                        v-model="data.image"
                        type="textarea"
                        :autosize="true"
                        placeholder="请输入缩略图url"/>
                    <Select
                        v-model="model"
                        style="width:200px"
                        @on-change="changeCatagory"
                        placeholder="请选择一个标签类别">
                        <Option v-for="(item, index) in selectData" :value="item.name" :key="index">{{ item.name }}</Option>

                    </Select>
                    <Button type="primary" @click="save">确定</Button>
                </div>

            </TabPane>
            <TabPane label="编辑" name="list">
                <Card
                    :bordered="true"
                    style="margin-bottom: 20px; cursor: pointer"
                    v-for="(item, n) in articleList"
                    :key="n">
                    <p slot="title">{{item.title}}</p>
                    <p>
                        {{item.summary}}
                    </p>
                </Card>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import {
        Select,
        Option,
        Input,
        Button,
        Tabs,
        TabPane,
        Card
    } from "iview";
    export default {
        components : {
            Select,
            Option,
            Button,
            Input,
            Tabs,
            TabPane,
            Card
        },
        data() {
            return {
                model: "",
                selectData: [],
                articleList: [],
                data: {
                    tag: "",
                    date: "",
                    title: "",
                    summary: "",
                    image: "",
                    content: "",
                    readCount: 0,
                    likeCount: 0,
                    commentCount: 0,
                    comments: []
                }
            };
        },
        async created() {
            const res = await this.$request({path: "catagory", data: {}, method: "GET"});
            Object
                .keys(res)
                .forEach(key => {
                    if (typeof res[key] === "object") {
                        this
                            .selectData
                            .push(res[key]);
                    }
                });
        },
        methods : {
            changeCatagory(name) {
                this.data.tag = name;
            },
            async imgAdd() {
                try {
                    const res = await this.$request({
                        path: "upload/article",
                        data: {
                            article: arguments[1]
                        },
                        method: "POST"
                    });
                    this.data.content = this
                        .data
                        .content
                        .replace(/![[\s\S]+]\(\d*\)/, `<img src='${res.article}'/>`);
                } catch (msg) {
                    this
                        .$Message
                        .info(msg);
                }
            },
            imgDel() {},
            async save() {
                if (!this.checkData()) {
                    return;
                }
                this.data.date = Date.parse(new Date());

                try {
                    const res = await this.$request({path: "article", method: "POST", data: this.data});
                    this
                        .$Message
                        .success("保存成功");
                } catch (msg) {
                    this
                        .$Message
                        .error(msg);
                }
                console.log(this.data);
            },
            checkData() {
                const {content, title, tag, image, summary} = this.data;
                if (!content || !title || !tag || !image || !summary) {
                    this
                        .$Message
                        .info("有未填信息不能提交");
                    return false;
                }
                return true;
            },
            changeTab(name) {
                if (name === 'list') {
                    this.getList();
                }
            },
            async getList() {
                try {
                    const res = await this.$request({
                        path: "article",
                        data: {},
                        method: "GET"
                    });

                   Object
                        .keys(res)
                        .forEach(key => {
                            if (typeof res[key] === "object") {
                                this
                                    .articleList
                                    .push(res[key]);
                            }
                        });
                } catch (msg) {
                    this
                        .$Message
                        .info(msg);
                }
            }
        },
        computed : {}
    };
</script>
<style lang="scss" scoped>
    .select {
        height: 300px;
        margin-top: 30px;
    }
    .detail-container {
        overflow-y: scroll;
        padding-bottom: 150px;
        height: 1000px;
    }

</style>