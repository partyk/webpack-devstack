<template>
    <div
        id="a"
        class="b"
        other-attr="{longname: longvalue}"
        other-attr2="{longname: longvalue}"
    >
        {{ greeting }}
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            greeting: 'Hello'
        };
    }
};
</script>