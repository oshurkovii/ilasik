class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayTime() {
        return `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`;
    }

    formatTime(unit) {
        return String(unit).padStart(2, '0');
    }

    addSeconds(seconds) {
        this.seconds += seconds;
        this.normalizeTime();
        this.updateDisplay();
    }

    addMinutes(minutes) {
        this.minutes += minutes;
        this.normalizeTime();
        this.updateDisplay();
    }

    addHours(hours) {
        this.hours += hours;
        this.normalizeTime();
        this.updateDisplay();
    }

    normalizeTime() {
        
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
        } else if (this.seconds < 0) {
            this.minutes += Math.floor((this.seconds + 1) / 60) - 1;
            this.seconds = (this.seconds + 60) % 60;
        }

        
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        } else if (this.minutes < 0) {
            this.hours += Math.floor((this.minutes + 1) / 60) - 1;
            this.minutes = (this.minutes + 60) % 60;
        }

        
        if (this.hours >= 24) {
            this.hours = this.hours % 24;
        } else if (this.hours < 0) {
            this.hours = (this.hours + 24) % 24;
        }
    }

    updateDisplay() {
        document.getElementById('timeDisplay').innerText = this.displayTime();
    }
}


const time = new Time(12, 0, 0); 
document.getElementById('timeDisplay').innerText = time.displayTime();

function addSeconds(seconds) {
    time.addSeconds(seconds);
}

function addMinutes(minutes) {
    time.addMinutes(minutes);
}

function addHours(hours) {
    time.addHours(hours);
}