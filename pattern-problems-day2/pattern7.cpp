#include<iostream>
    void pattern6(int n)
    {
        for(int i=0;i<n;i++)
        {
            for(int j=n;j>i;j--)
            {
                std::cout<<n-j+1;
            }
            std::cout<<"\n";
        }
    }
    int main()
    {
        int n;
        std::cout<<"enter the value of n:";
        std::cin>>n;
        pattern6(n);
        return(0);
    }