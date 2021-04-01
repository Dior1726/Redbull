<template>
	<div class="container">
		<h6 class="text-h6">Team name</h6>
		<div class="step-box q-py-md">
			<div class="step-box__header flex justify-between items-center">
				<p>Project name</p>
				<p class="fas fa-chevron-down text-grey-7"></p>
			</div>
			<ul class="progressbar">
				<li class="active" v-for="n in length" :key="n">
					<span>{{n}}</span>
					text 
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'VueStep',
		props: ['length']
	}
</script>

<style lang="scss" scoped>
.container{
	display: block;
  width: 100%;
  z-index: 1;
	h6 {
		margin: 10px auto;
	}
}

.step-box {
	border: 1px solid #ccc;
	border-left: none;
	border-right: none;
}

.progressbar {
	max-width: 100%;
	display: flex;
	margin: 0;
	padding-left: 0;
	list-style: none;
	justify-content: space-between;
}

.progressbar li{
  flex-basis: 17%;
  position: relative;
  text-align: center;
}

.progressbar li span{
  width: 25px;
  height: 25px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 1.5;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}

.progressbar li span:after{
  content: '';
  position: absolute;
  width:100%;
  height: 2px;
  background: #979797;
  top: 12.5px;
  left: -50%;
  z-index: -1;
}

.progressbar li.active span{
	border-color: #3aac5d;
	background: #3aac5d;
	color: white
}

.progressbar li:first-child span:after {
	content: none;
}

.progressbar li.active + li span:after{
	background: #3aac5d;
}

.progressbar li.active + li span{
	border-color: #3aac5d;
	background: #3aac5d;
	color: white
}

</style>