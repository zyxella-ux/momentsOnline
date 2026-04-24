function updateDateTime() {
   // =================================================
   // 🕛 Formatting current date & time
   // =================================================
      //let testNow = "2026-04-25";
      //const now = testNow ? new Date(testNow) : new Date();
      //const now = new Date();

      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[now.getDay()];

      const month = now.getMonth() + 1;
      const date = now.getDate();
      const year = now.getFullYear();


      // 12-hour format time
      let hour = now.getHours();
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      if (hour === 0) hour = 12;
      const minute = String(now.getMinutes()).padStart(2, "0");
      const second = String(now.getSeconds()).padStart(2, "0");

   // =================================================
   // ✅ ➊ Display #mainText1: current date & time
   // =================================================
      document.querySelector("#mainText1").textContent = `${dayName}`;
   // ✅ ➋ Set your own rules
   // =================================================
      const rules = [
         {
            match: {day:0},
            text: "The madam dies.\nHer family gets the honor for her chastity. This is the end of the Miss.",
            image: "./img/glory1.png",
            bgImage:"./img/noisy7.png",
            textColor:"#ffffff"
         },
         {
            match: {day:1},
            text: "A Miss born.",
            image: "./img/changechild-light-green.png",
            bgImage:"./img/noisy1.png",
         },
         {
            match: { day:2},
            text: "The Miss learns to be a good wife",
            image: "./img/learning.png",
            bgImage:"./img/noisy2.png",
         },
         {
            match: { day:3},
            text: "The Miss meets with the stranger, who is her future husband",
            image: "./img/meeting1.png",
            bgImage:"./img/noisy3.png",
         },
         {
            match: { day:4},
            text: "Miss marries",
            image: "./img/married.png",
            bgImage:"./img/noisy4.jpg",
         },
         {
            match: { day:5},
            text: "A madam gives birth to a child.",
            image: "./img/born child.webp",
            bgImage:"./img/noisy5.png",
            /*bgColor: "#abff041b"*/
         },
         {
            match: { day:6},
            text: "Her husband dies",
            image: "./img/die.png",
            bgImage: "./img/noisy6.png"
         },
         {
            match: {}, // 🔡 Default text
            text: "Have a nice day!",
            image: "",
            bgColor: ""
         }
      ];
      // const rules = [
      //    {
      //       match: { day: 5 },
      //       text: "Relax, it's Friday",
      //       image: "",
      //       bgColor: ""
      //    },
      //    {
      //       match: {}, // 🔡 Default text
      //       text: "Have a nice day!",
      //       image: "",
      //       bgColor: ""
      //    }
      // ];

      // const rules = [
      //    {
      //       match: { hourRange: [6, 12] },
      //       text: "Good morning",
      //       image: "",
      //       bgColor: ""
      //    },
      //    {
      //       match: { hourRange: [12, 18] },
      //       text: "Good afternoon",
      //       image: "",
      //       bgColor: ""
      //    },
      //    {
      //       match: {}, // 🔡 Default text
      //       text: "Have a nice day!",
      //       image: "",
      //       bgColor: ""
      //    }
      // ];

   // =================================================
   // ✔️ Function to check if a rule matches
   // =================================================
      function matchRule(rule, now) {
         const m = rule.match;

         if (m.year && m.year !== now.getFullYear()) return false;
         if (m.month && m.month !== (now.getMonth() + 1)) return false;
         if (m.date && m.date !== now.getDate()) return false;
         if (m.day !== undefined && m.day !== now.getDay()) return false;
         if (m.hour !== undefined && m.hour !== now.getHours()) return false;
         if (m.hourRange) {
            const [start, end] = m.hourRange;
            if (!(now.getHours() >= start && now.getHours() < end)) return false;
         }
         return true;
      }

   // =================================================
   // ✔️ Check rules in order and apply the first match
   // =================================================
      
      for (let rule of rules) {
         if (matchRule(rule, now)) {

            // =================================================
            // ✅ ➌ Display #mainText2 & #image1: based on rules
            // =================================================
               if (rule.text) document.querySelector("#mainText2").textContent = rule.text;
               if (rule.textColor) document.querySelector("#mainText2").style.color = rule.textColor;
               if (rule.textColor) document.querySelector("#mainText1").style.color = rule.textColor;
               if (rule.image) document.querySelector("#image1").src = rule.image;
               // if (rule.bgColor) document.body.style.backgroundColor = rule.bgColor;
               // if (rule.bgImage) document.body.style.backgroundImage = rule.bgImage;
               if (rule.bgImage) document.querySelector("#bg").src = rule.bgImage;
               
               break;
            // =================================================
         }
      }
   // =================================================
}

// =================================================
// ✔️ Update every second
// =================================================
   updateDateTime();
   setInterval(updateDateTime, 1000);

