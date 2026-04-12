---
id: how-to-monitor-credits
slug: monitor-credits
title: Monitor Your Credits
sidebar_label: Monitor Credits
description: Learn how to track your credit usage and estimate costs before running AI jobs.
---

# Monitor Your Credits

**Goal:** Track how many credits you have left, see what each action cost, and avoid running out mid-production.

Credits are the internal currency of ACT3 AI. Every AI render consumes credits based on the quality tier you choose and the length of the shot. Keeping an eye on your balance — and using the built-in cost estimator before you generate — prevents surprises mid-production.

If you are new to the platform: credits work like a prepaid balance. Your plan refills your monthly allocation at the start of each billing period. Any unused credits roll over to a bank (up to a plan-specific cap). Monthly credits are used first; rollover credits kick in when the monthly allocation runs out.

---

## Steps

1. **Find the credits counter.** The credit balance is always visible in the top-right corner of the app next to your profile icon. The number shown is your total available credits (monthly allocation remaining plus any rollover bank balance).

2. **Open the Credits Detail panel.** Click the credit counter in the top-right corner. The Credits Detail panel slides open on the right side of the app.

3. **Read the balance breakdown.** The Credits Detail panel shows two numbers: Monthly Allocation (credits from your current billing period — used first) and Rollover Bank (credits carried over from previous months). The monthly allocation resets on your billing date; the rollover bank accumulates month to month up to the cap for your plan.

4. **View recent transactions.** Scroll down in the Credits Detail panel to the Transaction History section. Each row shows: the date, the shot name, the quality tier used, and the credit cost. Use this to understand which renders are expensive and whether certain quality tiers are worth the spend for your project.

5. **Check the estimated cost before starting a render.** When you click the Generate button on any shot, ACT3 AI pauses before sending the job to show a Cost Estimate dialog. It lists the shot name, the engine to be used, the quality tier, the shot duration, and the estimated credit cost. Review this before clicking Confirm. For batch renders, the dialog shows the total estimated cost for all shots in the batch.

6. **Understand how quality tier affects cost.** Draft quality is the cheapest option — fast renders at lower resolution, good for checking composition and timing. Standard quality is the default for most production work. High quality uses more compute for better detail and lighting. 4K quality is the most expensive tier, reserved for final delivery on Enterprise plans. The credit cost roughly doubles with each quality step up.

7. **Monitor credits during a large batch render.** When a batch is running, the Credits Detail panel updates in real time after each shot completes. Watch the balance drop with each job. If the balance drops lower than expected, you can pause the batch from the Render Queue panel and investigate before the remaining jobs run.

8. **Buy more credits if needed.** At the bottom of the Credits Detail panel, click Buy Credits. A dialog opens showing credit pack options (prices vary by pack size). Purchase credits with the payment method on file for your Organization. Credits are added to your Rollover Bank and used after the monthly allocation is exhausted.

## Tips

- Always run Draft quality first to check framing, composition, and character placement. Upgrade to High quality only for final approved shots before delivery. This alone can cut your credit spend by half on a typical project.
- If you are close to your credit limit, use the Tag Shots for Batch workflow to queue only the highest-priority shots. Defer secondary angles and coverage shots to the next billing period.

---

## Next steps

- [Manage the Render Queue](/how-to/manage-render-queue)
- [Tag Shots for Batch Rendering](/how-to/tag-shots-for-batch)
- [Export for Delivery](/how-to/export-for-delivery)
