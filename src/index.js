const { exec } = require('child_process')
const execPromise = require('util').promisify(exec)

const macPlayCommand = (path, volume) => `afplay \"${path}" -v ${volume}`

const addPresentationCore = `Add-Type -AssemblyName presntationCore;`


module.exports = {
    play: async (path, volume=0.5) => {
        const volumeAdjustedByOs = process.platform === 'darwin' ? Math.min(2, volume * 2) : volume

        const playCommand = process.platform === 'darwin' ? macPlayCommand(path, volumeAdjustedByOs)
        
    }
}