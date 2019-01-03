const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1],
        [1, 4, 1],
        [1, 3, 1],
        [1, 3, 1],
        [1, 3, 1],
        [1, 3, 1],
        [1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 1, y: 5, id: 'ROBOT', orientation: ORIENTATION.BACK }),
        entities.chest({ x: 1, y: 1, orientation: 'FRONT' })
      ]
    },

    editor: {
      workspace: `<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start_handler" x="50" y="50" deletable="false">
    <statement name="body">
    <block type="move">
    <next>
        <block type="move"></block>
    </next>
</block>
</statement>
</block>
</xml>`,

      toolbox: `<xml id="toolbox" style="display: none">
                <category name="Code Blocks" colour="${blockColors.EVENT_COLOR}">
                    <block type="move" ></block>
                </category>
              </xml>`
    },

    label: 'Blockly - Drag and Drop',

    goals: [
      {
        type: 'moveTo',
        params: {position: {x: 1, y: 1}, entity: 'ROBOT'},
        desc: 'Move the robot to the metal tile',
        isMandatory: true
      }
    ],

    storyModal: {
      text: `Welcome to Robotopia where you can learn the basics of programming with cute little robots.`,
      hint: 'You can duplicate a block by copy and pasting it with CTRL+C and CTRL+V'
    },

    winModal: {
      text: `This block allows you to rotate your robot. The direction can be changed via the dropdown menu inside the block`,
      unlockedBlock: { name: 'Rotate', img: '../../assets/img/tutorials/blocks/rotate-dropdown.png' }
    },

    highlighters: {
      classes: ['play-button']
    }
  }
}
