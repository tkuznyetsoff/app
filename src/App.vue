<template>
	<v-app>
		<sidebar></sidebar>
		<main class="content">
			<router-view></router-view>
		</main>
	</v-app>
</template>

<script>
import { sidebar } from './components/components';

export default {
	name: 'app',
	components: { sidebar }
};
</script>

<style lang="scss">
	@import "assets/css/styles";
</style>
