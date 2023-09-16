import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.


class EmojiGame extends Component{
    state={
        totalScore:0,
        topScore:0,
        activeGame:true
    }

    render(){
        const {emojisList}=this.props;
        const {totalScore,topScore,activeGame}=this.state;
        return(
            <div className="main-bg">
                <NavBar totalScore={totalScore} topScore={topScore} activeGame={activeGame}/>
                <div className="playground">
                    {emojisList.map(each=>(
                        <EmojiCard key={each.id} each={each}/>
                    ))}
                </div>
            </div>
        )
    }
}

default export EmojiGame