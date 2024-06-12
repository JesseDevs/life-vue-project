<template>
	<section>
		<inner-column>
			<slot />
		</inner-column>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
	section.team {
		inner-column {
			overflow: hidden;
		}
	}

	// .landing inner-column {
	// 	padding-top: 6rem;
	// }
</style>
