#include <iostream>
#include <bits/stdc++.h>
#include <chrono>
using namespace std;

auto start = chrono::steady_clock::now();

int jump(vector<int> &nums)
{

    for (int i = 1; i < nums.size(); i++)
    {
        nums[i] = max(nums[i] + i, nums[i - 1]);
    }

    int ind = 0;
    int ans = 0;

    while (ind < nums.size() - 1)
    {
        ans++;
        ind = nums[ind];
    }

    return ans;
}

int main()
{

    vector<int> ques = {2, 3, 1, 1, 4};
    cout << jump(ques);

    //   Compilation Time code //
    cout << endl;
    auto end = chrono::steady_clock::now();
    auto diff = end - start;
    cout << chrono::duration<double, milli>(diff).count() << " ms" << endl;
    return 0;
}