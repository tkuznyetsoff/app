<template>
	<div class="test">
		<ul>
			<li
				v-for="item in data"
				class="test-item"
			>
				{{item.title}}
			</li>
		</ul>
	</div>
</template>

<script>
import store from '@/store';

export default {
	name: 'Home',
	computed: {
		data: () => store.state.db
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.test {
	border: 1px solid #7f7f7f;

	&-item {
		display: block;
		color: red;
	}
}
</style>
