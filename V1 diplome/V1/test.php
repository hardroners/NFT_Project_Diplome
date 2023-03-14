<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
    <p id="display">null</p>
    <p id="nom">null</p>
    <p id="prenom">null</p>
    <p id="annee">null</p>
    <p id="jury">null</p>
    <p id="filiere">null</p>
    <p id="diplome">null</p>
    <script src="./eth/sm.js"></script>
    <script>getNFTMetadata(6);</script>

    <!-- <script>createNFT("https://fleek.ipfs.io/ipfs/bafybeiapagidjpw2w2l5h7fmzyweds5rvlxjhu6sdpfpsu4r7pqgskrzeq");</script> -->

    <form action="" method="get">
        <input type="text" id="oui" name="oui">
        <button type="submit">test</button>
    </form>
    <?php
    echo $_GET["oui"]
    ?>
</body>
</html>