<template>
    <div class="detail-container">
        &nbsp;
        <div v-html="mark"></div>
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
            article: '#### 666',
        }
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
        margin: 0px;
        padding: 0px;
        li {
            margin: 0px;
            padding: 0px;
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
