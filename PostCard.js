render(){
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
                <View style={styles.authorImageContainer}>
                    <Image>
                        source={require("../assets/profile_img.png")}
                        style={styles.profielImage}
                    ></Image>
                    </View>
                    <View style={styles.authorNameCOntainer}>
                        <Text style={styles.authorNameText}>{this.props.psot.author}</Text>
                        </View>
                        </View>
                        <Image source={require("../assets/post.jpeg")}style={styles.postImage}/>
                        <View style={styles.captionContainer}>

                      
    )
}