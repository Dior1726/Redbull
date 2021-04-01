<template>
	<q-page class="q-pa-md">
		<h6 class="text-center q-my-auto">Отчет - {{$route.params.id}}  </h6>
		<div class="row q-col-gutter-md q-pa-xs">
			
			<div class="col-md-6 col-sm-12 col-xs-12">
				<card-base>
					<apex-simple-pie-chart></apex-simple-pie-chart>
				</card-base>
			</div>

			<div class="col-md-6 col-sm-12 col-xs-12">
				<card-base>
					<apex-column-with-data-labels />
				</card-base>
			</div>
		
		</div>
	</q-page>
</template>

<script>

import CardBase from 'components/CardBase'
import ApexColumnWithDataLabels from 'src/components/ApexColumnWithDataLabels.vue'

	export default {
		components: {
			CardBase,
			ApexSimplePieChart: () => import('components/ApexSimplePieChart'),
			ApexColumnWithDataLabels,
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>

</style>