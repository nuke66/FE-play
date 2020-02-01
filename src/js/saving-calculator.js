$(() => {
    const SAVERCALCULATOR = {
      Init() {
        SAVERCALCULATOR.InitialiseSaverCalculator();
      },
      InitialiseSaverCalculator() {
        const moduleRangeComponents = $('input[type=range]');  // FIX this gets all range components
        const moduleLinkedCardsDropdown = $('#sc-linked-cards');
        const moduleMonthlySavingTotal = $("#sc-saving-monthly");
        const moduleYearlySavingTotal = $("#sc-saving-yearly");
        const moduleExpenseId = "#sc-expense-";
        const moduleSavingId = '#sc-saving-';
        const modulePercentAttr = "d-pc";
        const moduleSeqNoAttr = "d-seq-no";
  
        // Calculate all totals
        calcTotals = () => {
          let expense = 0;
          let saving = 0;
          let total_saving = 0;
          let card_percent = Number(moduleLinkedCardsDropdown.val());
  
          // Calculate amounts for each ranage slider
          moduleRangeComponents.each(function (i, obj) {
            expense = $(this).val();
            discount = Number($(this).attr(modulePercentAttr));
            saving = expense * discount;
            total_saving = total_saving + saving;
            $(moduleExpenseId + $(this).attr(moduleSeqNoAttr)).html(expense);
            $(moduleSavingId + $(this).attr(moduleSeqNoAttr)).html(saving);
          });
  
          // Calculate total savings
          total_saving = total_saving * card_percent;
          moduleMonthlySavingTotal.html(total_saving.toFixed(2));
          moduleYearlySavingTotal.html((total_saving * 12).toFixed(2));
        }
  
        // Range sliders listener
        moduleRangeComponents.on('input change', function () {
          calcTotals();
        });
  
        // No of CC dropdown listener
        moduleLinkedCardsDropdown.on('input change', function () {
          calcTotals();
        });
      }
    }
  
  
    if ($('.saver-calculator').length > 0) {
      SAVERCALCULATOR.Init();
    }
  });
  