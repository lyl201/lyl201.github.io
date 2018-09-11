<template>
    <div class="detail-container">
        &nbsp;
        <h1>{{title}}</h1>
        <div v-html="mark" v-highlight></div>
        <div class="comment">
            <div class="title">12条评论:</div>
            <ul>
                <li v-for="n in 5" :key="n">
                    <div><img src="http://www.yangqq.com/skin/850/images/text01.jpg" alt=""><b>alloc</b> 1楼-4年前 </div>
                    <div>marked 在浏览器里应该也能跑</div>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            article: "",
            title: "",
        }
    },
    async created() {
        const res = await this.$request({
            path: `article/${this.$route.params.id}`,
            data: {},
            method: 'GET',
        })
        this.article = res.content;
        this.title = res.title;

    },
    mounted(){
       
    },
    methods: {
        
    },
    computed: {
        mark(){
            return this.$marked(this.article)
        }
    }
}
</script>
<style lang="scss" scoped>
h1{
    border-bottom: 1px solid #2db7f5;
    padding-bottom: 10px;
     
 }
.detail-container {
    background: #fff;
    // height: 1500px;
    padding: 0px 20px;
}
.comment {
    // border-top: 2px solid #976;
    padding: 10px 0px; 
    .title {
        background: #F6F6F6;
        height: 40px;
        line-height: 40px;
        margin-bottom: 20px;
    }
    ul {
        li {
            list-style:none;
            div:first-child {
                padding-top: 10px;
                height: 40px;
                img {
                    height: 30px;
                    width: 30px;
                    vertical-align: middle;
                    margin-right: 20px;
                }
            }
            div:last-child {  
                padding: 10px 0px;
                padding-left: 50px;
                display: flex;
                align-items: center;

            }
        }
        li:not(:last-child) {
           border-bottom:2px solid  #F6F6F6;
        }
        li:hover{
            background: #F6F6F6;
        }
    }
}
</style>
