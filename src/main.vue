<template>
  <div id="Message" class="message" :style="{opacity: opacity,transitionDuration: transitionTime+'s'}">
    <div class="display-table">
    	<div class="display-table-cell">
    		<div class="popup">
    			<div class="message-text">
    				<div class="title" v-text="title" v-if="title"></div>
    				<div class="content" v-text="content" v-if="content"></div>
    			</div>
    			<div class="affirm" @click="close">确认</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
  	return {
  		title: '',
  		content: '',
  		transitionTime: 0.3,
  		callback: '',
  		opacity: 0
  	};
  },
  methods: {
  	close () {
  		this.opacity = 0;
  		this.$el.addEventListener('transitionend', this.destroyElement);
  	},
  	destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
        if (typeof this.callback === 'function') {
          this.callback();
        }
    }
  },
  mounted () {
  	const self = this;
  	setTimeout(function() {
  		self.opacity = 1;
  	},1)
  }
}
</script>

<style>
.message{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	word-break: break-all;
	background-color: rgba(0,0,0,0.4);
}
.message{
	transition: opacity .3s ease;
	-webkit-transition: opacity .3s ease;
}
.message .display-table{
	display: table;
	width: 100%;
	height: 100%;
}
.message .display-table-cell{
	display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 100%;
	height: 100%;
}
.message .popup{
	width: 5rem;
	margin: 0 auto;
	font-size: 0.24rem;
	color: white;
	background-color: white;
	border-radius: 0.2rem;
	overflow: hidden;
}
.message .message-text{
	width: 100%;
	padding-left: 0.4rem;
	padding-right: 0.4rem;
	padding-top: 0.3rem;
	padding-bottom: 0.3rem;
	box-sizing: border-box;
	border-bottom: 1px solid #927a27;
}
.message .title{
	width: 100%;
	font-size: 0.28rem;
	color: #333333;
	text-align: center;
}
.message .content{
	width: 100%;
	padding-top: 0.2rem;
	font-size: 0.24rem;
	color: #333333;
	line-height: 1.8;
	text-align: left;
}
.message .affirm{
	width: 100%;
	padding: 0.24rem;
	text-align: center;
	font-size: 0.28rem;
	color: #f8b62d;
	box-sizing: border-box;
}
</style>
