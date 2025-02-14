#include <iostream>
#include <bits/stdc++.h>
#include <chrono>
using namespace std;

auto start = chrono::steady_clock::now();

vector<int> twoSum(vector<int> &nums, int target)
{

    // most optimal solution using hashmap

    map<int, int> mpp;

    int n = nums.size();

    for (int i = 0; i < n; i++)
    {

        int element = target - nums[i];

        if (mpp.find(element) != mpp.end())
        {
            return {mpp[element], i};
        }

        mpp[nums[i]] = i;
    }

    return {-1, -1};
}

int main()
{
    vector<int> ques = {2, 7, 11, 15};
    vector<int> ans = twoSum(ques, 9);

    for (int i = 0; i < ans.size(); i++)
    {
        cout << ans[i] << " ";
    }

    //   Compilation Time code //
    cout << endl;
    auto end = chrono::steady_clock::now();
    auto diff = end - start;
    cout << chrono::duration<double, milli>(diff).count() << " ms" << endl;
    return 0;
}