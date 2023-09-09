<script>
    export let color = 'white';
</script>
<div class='back'>
    <a class='back-link' href='./' style={`color:${color}`}>⌂</a>
</div>

<style>
    .back {
        top:0px;
        left:0px;
        z-index: 1000;
        transform: scale(1,0.95);
        position: fixed;
    }
    .back-link {
        font-size: 48px;
        font-weight: 1000;
        padding: 10px;
        font-family: var(--font-sans);
        text-shadow: rgba(125,125,125,0.5) 0px 0px 5px;
    }
    .back:hover {
        scale:1.05;
    }
</style>