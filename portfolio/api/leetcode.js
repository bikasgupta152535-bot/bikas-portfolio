export default async function handler(req, res) {
  try {
    const query = `
      query getUserStats($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      body: JSON.stringify({
        query,
        variables: {
          username: "Bikas16"
        }
      })
    });

    const data = await response.json();
    const user = data?.data?.matchedUser;

    if (!user) {
      return res.status(404).json({
        error: "LeetCode user not found"
      });
    }

    const stats = user.submitStatsGlobal.acSubmissionNum;

    const easy =
      stats.find(x => x.difficulty === "Easy")?.count || 0;

    const medium =
      stats.find(x => x.difficulty === "Medium")?.count || 0;

    const hard =
      stats.find(x => x.difficulty === "Hard")?.count || 0;

    return res.status(200).json({
      username: user.username,
      totalSolved: easy + medium + hard,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
      ranking: user.profile?.ranking || 0
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch LeetCode statistics"
    });
  }
}