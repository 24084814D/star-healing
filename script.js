{\rtf1\ansi\ansicpg936\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red24\green26\blue31;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c12157\c13725\c16078;\cssrgb\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // \uc0\u27169 \u22359 \u21270 \u24320 \u21457  - \u20840 \u23616 \u21464 \u37327 \
const app = \{\
    // \uc0\u20581 \u24247 \u25351 \u25968 \u30456 \u20851 \
    healthScore: localStorage.getItem('healthScore') ? parseInt(localStorage.getItem('healthScore')) : 0,\
    // \uc0\u24863 \u24681 \u35760 \u24405 \u25968 \u25454 \
    gratitudeRecords: localStorage.getItem('gratitudeRecords') ? JSON.parse(localStorage.getItem('gratitudeRecords')) : \{\},\
    // \uc0\u40723 \u21169 \u35821 \u21477 \u24211 \
    encouragementMessages: [\
        "\uc0\u26126 \u22825 \u30340 \u26143 \u31354 \u20250 \u26356 \u28201 \u26580 \u65292 \u24895 \u20320 \u24102 \u30528 \u28201 \u26262 \u21069 \u34892 \u10024 ",\
        "\uc0\u27599 \u19968 \u20010 \u24179 \u20961 \u30340 \u26085 \u24120 \u65292 \u37117 \u34255 \u30528 \u32454 \u30862 \u30340 \u32654 \u22909 \u55356 \u57151 ",\
        "\uc0\u24930 \u24930 \u26469 \u65292 \u19968 \u20999 \u37117 \u20250 \u26397 \u30528 \u20320 \u26399 \u24453 \u30340 \u26041 \u21521 \u21457 \u23637 \u55356 \u57137 ",\
        "\uc0\u26126 \u22825 \u30340 \u39118 \u65292 \u20250 \u21561 \u25955 \u20170 \u22825 \u25152 \u26377 \u30340 \u28902 \u24700 \u55356 \u57132 \u65039 ",\
        "\uc0\u20320 \u20540 \u24471 \u34987 \u28201 \u26580 \u20197 \u24453 \u65292 \u26126 \u22825 \u20134 \u26159 \u22914 \u27492 \u55357 \u56475 ",\
        "\uc0\u37027 \u20123 \u24494 \u23567 \u30340 \u32654 \u22909 \u65292 \u32456 \u23558 \u27719 \u32858 \u25104 \u26143 \u27827 \u55356 \u57119 ",\
        "\uc0\u24895 \u26126 \u22825 \u30340 \u20320 \u65292 \u20381 \u28982 \u20445 \u25345 \u28909 \u29233 \u65292 \u22868 \u36212 \u23665 \u28023 \u55356 \u57098 ",\
        "\uc0\u29983 \u27963 \u30340 \u28201 \u26580 \u65292 \u20250 \u22312 \u19981 \u32463 \u24847 \u38388 \u25317 \u25265 \u20320 \u55358 \u56589 ",\
        "\uc0\u27599 \u19968 \u20010 \u28165 \u26216 \u65292 \u37117 \u26159 \u26032 \u30340 \u24320 \u22987 \u55356 \u57118 ",\
        "\uc0\u20320 \u30340 \u32654 \u22909 \u65292 \u20540 \u24471 \u34987 \u26102 \u20809 \u29645 \u34255 \u55357 \u56491 "\
    ],\
    // \uc0\u21021 \u22987 \u21270 \u20989 \u25968 \
    init: function() \{\
        this.initHealthIndicator();\
        this.initNavbar();\
        this.initSectionAnimation();\
        this.initComfortSection();\
        this.initMeditationSection();\
        this.initGratitudeSection();\
        this.initMemorySection();\
        this.initSmoothScroll();\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u20581 \u24247 \u25351 \u25968 \u21644 \u23567 \u26641 \u33495 \
    initHealthIndicator: function() \{\
        const scoreElement = document.getElementById('health-score');\
        const saplingElement = document.getElementById('sapling');\
        \
        // \uc0\u26356 \u26032 \u20998 \u25968 \u26174 \u31034 \
        scoreElement.textContent = this.healthScore;\
        \
        // \uc0\u26681 \u25454 \u20998 \u25968 \u35843 \u25972 \u23567 \u26641 \u33495 \u22823 \u23567 \
        this.updateSaplingSize(saplingElement, this.healthScore);\
        \
        // \uc0\u20445 \u23384 \u20998 \u25968 \u21040 \u26412 \u22320 \u23384 \u20648 \
        localStorage.setItem('healthScore', this.healthScore);\
    \},\
\
    // \uc0\u26356 \u26032 \u23567 \u26641 \u33495 \u22823 \u23567 \
    updateSaplingSize: function(element, score) \{\
        let scale = 1 + (score * 0.1); // \uc0\u27599 \u20998 \u22686 \u21152 10%\u22823 \u23567 \u65292 \u26368 \u22823 2\u20493 \
        scale = Math.min(scale, 2); // \uc0\u38480 \u21046 \u26368 \u22823 2\u20493 \
        element.style.transform = `scale($\{scale\})`;\
    \},\
\
    // \uc0\u22686 \u21152 \u20581 \u24247 \u25351 \u25968 \
    addHealthScore: function(points = 1) \{\
        this.healthScore += points;\
        document.getElementById('health-score').textContent = this.healthScore;\
        this.updateSaplingSize(document.getElementById('sapling'), this.healthScore);\
        localStorage.setItem('healthScore', this.healthScore);\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u23548 \u33322 \u26639 \
    initNavbar: function() \{\
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');\
        const navbarMenu = document.querySelector('.navbar-menu');\
        \
        mobileMenuBtn.addEventListener('click', () => \{\
            navbarMenu.classList.toggle('show');\
        \});\
        \
        // \uc0\u28857 \u20987 \u23548 \u33322 \u38142 \u25509 \u20851 \u38381 \u31227 \u21160 \u31471 \u33756 \u21333 \
        const navLinks = document.querySelectorAll('.nav-link');\
        navLinks.forEach(link => \{\
            link.addEventListener('click', () => \{\
                navbarMenu.classList.remove('show');\
            \});\
        \});\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u26495 \u22359 \u21160 \u30011 \
    initSectionAnimation: function() \{\
        const sections = document.querySelectorAll('.section');\
        \
        // \uc0\u39029 \u38754 \u21152 \u36733 \u26102 \u26174 \u31034 \u31532 \u19968 \u20010 \u26495 \u22359 \
        sections[0].classList.add('active');\
        \
        // \uc0\u30417 \u21548 \u28378 \u21160 \u65292 \u26174 \u31034 \u36827 \u20837 \u35270 \u21475 \u30340 \u26495 \u22359 \
        const observer = new IntersectionObserver((entries) => \{\
            entries.forEach(entry => \{\
                if (entry.isIntersecting) \{\
                    gsap.to(entry.target, \{\
                        opacity: 1,\
                        y: 0,\
                        duration: 0.8,\
                        ease: "power2.out"\
                    \});\
                    entry.target.classList.add('active');\
                \}\
            \});\
        \}, \{ threshold: 0.1 \});\
        \
        sections.forEach(section => \{\
            observer.observe(section);\
        \});\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u23433 \u25242 \u33329 \
    initComfortSection: function() \{\
        const emotionButtons = document.querySelectorAll('.emotion-btn');\
        const responseBox = document.getElementById('response-box');\
        const responseText = document.getElementById('emotion-response');\
        \
        emotionButtons.forEach(btn => \{\
            btn.addEventListener('click', () => \{\
                // \uc0\u33719 \u21462 \u23545 \u24212 \u21709 \u24212 \u25991 \u26412 \
                const response = btn.getAttribute('data-response');\
                responseText.textContent = response;\
                \
                // \uc0\u26174 \u31034 \u21709 \u24212 \u26694 \u24182 \u28155 \u21152 \u21160 \u30011 \
                responseBox.classList.remove('show');\
                setTimeout(() => \{\
                    responseBox.classList.add('show');\
                    // GSAP\uc0\u21160 \u30011 \u22686 \u24378 \
                    gsap.from(responseBox, \{\
                        opacity: 0,\
                        y: 20,\
                        duration: 0.5,\
                        ease: "power2.out"\
                    \});\
                \}, 100);\
                \
                // \uc0\u37325 \u32622 \u25152 \u26377 \u25353 \u38062 \u26679 \u24335 \
                emotionButtons.forEach(b => b.classList.remove('active'));\
                // \uc0\u39640 \u20142 \u24403 \u21069 \u25353 \u38062 \
                btn.classList.add('active');\
            \});\
        \});\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u20901 \u24819 \u20179 \
    initMeditationSection: function() \{\
        const musicItems = document.querySelectorAll('.music-item');\
        const videoItems = document.querySelectorAll('.video-item');\
        const bgMusic = document.getElementById('bg-music');\
        \
        // \uc0\u20901 \u24819 \u38899 \u20048 \u28857 \u20987 \u20107 \u20214 \
        musicItems.forEach(item => \{\
            item.addEventListener('click', () => \{\
                const musicSrc = item.getAttribute('data-music');\
                \
                // \uc0\u20572 \u27490 \u24403 \u21069 \u38899 \u20048 \
                if (bgMusic.src) \{\
                    bgMusic.pause();\
                \}\
                \
                // \uc0\u35774 \u32622 \u24182 \u25773 \u25918 \u26032 \u38899 \u20048 \
                bgMusic.src = musicSrc;\
                bgMusic.play();\
                \
                // \uc0\u22686 \u21152 \u20581 \u24247 \u25351 \u25968 \
                this.addHealthScore();\
                \
                // \uc0\u25552 \u31034 \
                alert('\uc0\u20901 \u24819 \u38899 \u20048 \u24050 \u25773 \u25918 \u65292 \u20581 \u24247 \u25351 \u25968 +1\u10024 ');\
            \});\
        \});\
        \
        // \uc0\u20901 \u24819 \u35270 \u39057 \u28857 \u20987 \u20107 \u20214 \u65288 \u36339 \u36716 \u21518 \u22686 \u21152 \u20581 \u24247 \u25351 \u25968 \u65289 \
        videoItems.forEach(item => \{\
            item.addEventListener('click', (e) => \{\
                // \uc0\u22686 \u21152 \u20581 \u24247 \u25351 \u25968 \
                this.addHealthScore();\
                \
                // \uc0\u25552 \u31034 \
                alert('\uc0\u21363 \u23558 \u25171 \u24320 \u20901 \u24819 \u35270 \u39057 \u65292 \u20581 \u24247 \u25351 \u25968 +1\u10024 ');\
            \});\
        \});\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u24863 \u24681 \u20179 \
    initGratitudeSection: function() \{\
        const submitBtn = document.getElementById('submit-gratitude');\
        const gratitudeContent = document.getElementById('gratitude-content');\
        const gratitudeMessage = document.getElementById('gratitude-message');\
        \
        submitBtn.addEventListener('click', () => \{\
            const content = gratitudeContent.value.trim();\
            \
            if (!content) \{\
                alert('\uc0\u35831 \u20889 \u19979 \u20320 \u24819 \u24863 \u24681 \u30340 \u23567 \u20107 \u21543 \u55357 \u56475 ');\
                return;\
            \}\
            \
            // \uc0\u33719 \u21462 \u24403 \u21069 \u26085 \u26399 \
            const today = new Date();\
            const dateKey = today.toISOString().split('T')[0]; // YYYY-MM-DD\uc0\u26684 \u24335 \
            \
            // \uc0\u20445 \u23384 \u21040 \u35760 \u24405 \
            this.gratitudeRecords[dateKey] = content;\
            localStorage.setItem('gratitudeRecords', JSON.stringify(this.gratitudeRecords));\
            \
            // \uc0\u38543 \u26426 \u36873 \u25321 \u40723 \u21169 \u35821 \u21477 \
            const randomMsg = this.encouragementMessages[Math.floor(Math.random() * this.encouragementMessages.length)];\
            \
            // \uc0\u26174 \u31034 \u40723 \u21169 \u35821 \u21477 \
            gratitudeMessage.textContent = randomMsg;\
            gratitudeMessage.classList.remove('show');\
            \
            setTimeout(() => \{\
                gratitudeMessage.classList.add('show');\
                // GSAP\uc0\u21160 \u30011 \
                gsap.from(gratitudeMessage, \{\
                    opacity: 0,\
                    y: 20,\
                    duration: 0.5,\
                    ease: "power2.out"\
                \});\
            \}, 100);\
            \
            // \uc0\u28165 \u31354 \u36755 \u20837 \u26694 \
            gratitudeContent.value = '';\
            \
            // \uc0\u21047 \u26032 \u22238 \u24518 \u20179 \u26085 \u21382 \
            this.renderCalendar(\
                document.getElementById('year-select').value || new Date().getFullYear(),\
                document.getElementById('month-select').value || new Date().getMonth() + 1\
            );\
        \});\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u22238 \u24518 \u20179 \
    initMemorySection: function() \{\
        const yearSelect = document.getElementById('year-select');\
        const monthSelect = document.getElementById('month-select');\
        const refreshBtn = document.getElementById('refresh-calendar');\
        const calendar = document.getElementById('memory-calendar');\
        const memoryDetail = document.getElementById('memory-detail');\
        \
        // \uc0\u22635 \u20805 \u24180 \u20221 \u36873 \u25321 \u22120 \u65288 \u36817 5\u24180 \u65289 \
        const currentYear = new Date().getFullYear();\
        for (let year = currentYear - 4; year <= currentYear; year++) \{\
            const option = document.createElement('option');\
            option.value = year;\
            option.textContent = year + '\uc0\u24180 ';\
            if (year === currentYear) option.selected = true;\
            yearSelect.appendChild(option);\
        \}\
        \
        // \uc0\u22635 \u20805 \u26376 \u20221 \u36873 \u25321 \u22120 \
        for (let month = 1; month <= 12; month++) \{\
            const option = document.createElement('option');\
            option.value = month;\
            option.textContent = month + '\uc0\u26376 ';\
            if (month === new Date().getMonth() + 1) option.selected = true;\
            monthSelect.appendChild(option);\
        \}\
        \
        // \uc0\u21021 \u22987 \u28210 \u26579 \u24403 \u21069 \u26376 \u20221 \u26085 \u21382 \
        this.renderCalendar(currentYear, new Date().getMonth() + 1);\
        \
        // \uc0\u21047 \u26032 \u26085 \u21382 \u25353 \u38062 \u20107 \u20214 \
        refreshBtn.addEventListener('click', () => \{\
            this.renderCalendar(yearSelect.value, monthSelect.value);\
        \});\
        \
        // \uc0\u26085 \u21382 \u28857 \u20987 \u20107 \u20214 \
        calendar.addEventListener('click', (e) => \{\
            const dayElement = e.target.closest('.calendar-day');\
            if (!dayElement) return;\
            \
            const date = dayElement.getAttribute('data-date');\
            if (!date || !this.gratitudeRecords[date]) \{\
                memoryDetail.classList.remove('show');\
                return;\
            \}\
            \
            // \uc0\u26174 \u31034 \u22238 \u24518 \u35814 \u24773 \
            memoryDetail.innerHTML = `\
                <h3 style="color: var(--primary-color); margin-bottom: 16px;">$\{date\} \uc0\u30340 \u24863 \u24681 \u23567 \u20107 </h3>\
                <p style="font-size: 1.1rem; line-height: 1.8;">$\{this.gratitudeRecords[date]\}</p>\
            `;\
            memoryDetail.classList.add('show');\
            \
            // GSAP\uc0\u21160 \u30011 \
            gsap.from(memoryDetail, \{\
                opacity: 0,\
                y: 20,\
                duration: 0.5,\
                ease: "power2.out"\
            \});\
        \});\
    \},\
\
    // \uc0\u28210 \u26579 \u26085 \u21382 \
    renderCalendar: function(year, month) \{\
        const calendar = document.getElementById('memory-calendar');\
        calendar.innerHTML = '';\
        \
        // \uc0\u33719 \u21462 \u24403 \u26376 \u31532 \u19968 \u22825 \
        const firstDay = new Date(year, month - 1, 1);\
        // \uc0\u33719 \u21462 \u24403 \u26376 \u26368 \u21518 \u19968 \u22825 \
        const lastDay = new Date(year, month, 0);\
        // \uc0\u33719 \u21462 \u24403 \u26376 \u22825 \u25968 \
        const daysInMonth = lastDay.getDate();\
        // \uc0\u33719 \u21462 \u31532 \u19968 \u22825 \u26159 \u26143 \u26399 \u20960  (0-6)\
        const firstDayWeekday = firstDay.getDay();\
        \
        // \uc0\u22635 \u20805 \u26376 \u21021 \u31354 \u30333 \
        for (let i = 0; i < firstDayWeekday; i++) \{\
            const emptyDay = document.createElement('div');\
            emptyDay.classList.add('calendar-day');\
            emptyDay.style.opacity = '0.3';\
            calendar.appendChild(emptyDay);\
        \}\
        \
        // \uc0\u22635 \u20805 \u26085 \u26399 \
        for (let day = 1; day <= daysInMonth; day++) \{\
            const dateElement = document.createElement('div');\
            dateElement.classList.add('calendar-day');\
            dateElement.textContent = day;\
            \
            // \uc0\u26684 \u24335 \u21270 \u26085 \u26399 \u20026  YYYY-MM-DD\
            const dateStr = `$\{year\}-$\{String(month).padStart(2, '0')\}-$\{String(day).padStart(2, '0')\}`;\
            dateElement.setAttribute('data-date', dateStr);\
            \
            // \uc0\u22914 \u26524 \u26377 \u24863 \u24681 \u35760 \u24405 \u65292 \u26631 \u35760 \u26679 \u24335 \
            if (this.gratitudeRecords[dateStr]) \{\
                dateElement.classList.add('has-memory');\
            \}\
            \
            calendar.appendChild(dateElement);\
        \}\
    \},\
\
    // \uc0\u21021 \u22987 \u21270 \u24179 \u28369 \u28378 \u21160 \
    initSmoothScroll: function() \{\
        document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
            anchor.addEventListener('click', function (e) \{\
                e.preventDefault();\
                \
                const targetId = this.getAttribute('href');\
                const targetElement = document.querySelector(targetId);\
                \
                if (targetElement) \{\
                    // \uc0\u20351 \u29992 GSAP\u23454 \u29616 \u24179 \u28369 \u28378 \u21160 \
                    gsap.to(window, \{\
                        scrollTo: \{\
                            y: targetElement.offsetTop - 80, // \uc0\u20559 \u31227 \u23548 \u33322 \u26639 \u39640 \u24230 \
                            autoKill: true\
                        \},\
                        duration: 1,\
                        ease: "power2.out"\
                    \});\
                \}\
            \});\
        \});\
    \}\
\};\
\
// \uc0\u39029 \u38754 \u21152 \u36733 \u23436 \u25104 \u21518 \u21021 \u22987 \u21270 \u24212 \u29992 \
document.addEventListener('DOMContentLoaded', () => \{\
    app.init();\
\});}