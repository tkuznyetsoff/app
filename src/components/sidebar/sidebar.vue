<template>
	<nav class="sidebar">
		<ul class="sidebar-list">
			<li class="sidebar-list__item">
				<router-link to="/home">
					<v-icon>home</v-icon>
					<p>Home</p>
				</router-link>
			</li>
			<li class="sidebar-list__item">
				<router-link to="/categories">
					<v-icon>label</v-icon>
					<p>Categories</p>
				</router-link>
			</li>
			<li class="sidebar-list__item">
				<router-link to="/settings">
					<v-icon>settings</v-icon>
					<p>Settings</p>
				</router-link>
			</li>
		</ul>
	</nav>
</template>
